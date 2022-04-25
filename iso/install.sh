#!/usr/bin/bash

ARCHFILE="archlinux-2022.04.05-x86_64.iso"
SIGFILE="$ARCHFILE.sig"
REPO="archlinux"
MIRROR="https://mirror.ams1.nl.leaseweb.net/archlinux/iso/2022.04.05"

echo "Grabbing archlinux-2022.04.05-x86_64.iso"
wget "$MIRROR/$ARCHFILE"

echo "Grabbing $ARCHFILE.sig"
wget "$MIRROR/$ARCHFILE.sig"

echo "GPG file verification"
gpg --verify "$SIGFILE" "$ARCHFILE"
