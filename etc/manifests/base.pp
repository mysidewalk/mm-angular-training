exec { 'apt-get update':
  command => '/usr/bin/apt-get update'
}

package {"nginx":
    ensure => present,
    require => Exec['apt-get update']
}

service {"nginx":
    ensure => 'running',
    enable => 'true',
    require => Package['nginx'],
}

file {"remove-nginx-default-conf":
    path => '/etc/nginx/sites-enabled/default',
    ensure => absent,
    require => Package['nginx'],
}

file {"add-nginx-default-conf":
    notify  => Service["nginx"], # establish restart relationship between config and service
    path => '/etc/nginx/sites-enabled/training',
    ensure => present,
    require => [ Package['nginx'],
		 File['remove-nginx-default-conf']
		],
    source => "/vagrant/etc/nginx/training",
}
