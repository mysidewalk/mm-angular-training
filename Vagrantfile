# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "puphpet/debian75-x64"
  config.vm.network "forwarded_port", guest: 80, host: 9999 

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "512"]
  end
  
  config.vm.provision "puppet" do |puppet|
    puppet.manifests_path = "etc/manifests"
    puppet.manifest_file  = "base.pp"
  end

  config.vm.provision :shell, :path => "etc/scripts/bootstrap.sh"
  config.vm.provision :shell, :inline => "cd /var/www && bower install --allow-root", :run => "always"

  config.vm.synced_folder ".", "/var/www"

end
