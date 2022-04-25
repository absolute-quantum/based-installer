#!/usr/bin/bash
set -x CURUSER $USER
su root
echo "Installing docker"
pacman -S docker
echo $CURUSER
su $CURUSER
