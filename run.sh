#!/bin/sh

# Recordin for 20s
yarn record

# converting noisy raw file to WAV file

yarn convert ./outputs/original.raw ./outputs/original.wav

# noise processing

./lib/./rnnoise ./outputs/original.raw ./outputs/final.raw

# converting process raw file to WAV

yarn convert ./outputs/final.raw ./outputs/final.wav