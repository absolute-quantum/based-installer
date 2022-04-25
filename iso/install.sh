#!/usr/bin/bash

ARCHFILE="archlinux-2022.04.05-x86_64.iso"
SIGFILE="$ARCHFILE.sig"
MIRROR="https://mirror.ams1.nl.leaseweb.net/archlinux/iso/2022.04.05"

echo "Grabbing $MIRROR/$ARCHFILE"
wget "$MIRROR/$ARCHFILE"

echo "Grabbing $MIRROR/$ARCHFILE.sig"
wget "$MIRROR/$ARCHFILE.sig"

echo "Checksum verification"
gpg --verify "$SIGFILE" "$ARCHFILE"
