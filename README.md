# To test this project locally

## Clone the repo

```bash
git clone https://github.com/rawatnaresh/rnnoise-demo.git
cd rnnoise-demo
```

## Install dependencies

```bash
yarn
```

Then run,

```bash
bash run.sh
```

this will generate audio files in `/outputs` directory

## Troubleshooting

If there's any linking error then

```bash
cd lib/

otool -L rnnoise

install_name_tool -change <librnnoise.dylib-path-from-otool-output> <absolute/path/to/rnnoise-demo/lib/librnnoise.dylib> rnnoise
```

## Resources

- [rnnoise](https://github.com/xiph/rnnoise) for noise supression.
- [naudiodon](https://github.com/Streampunk/naudiodon) for recording.
- [node-wav](https://github.com/TooTallNate/node-wav) for converting raw file to wav file for audio playback.
