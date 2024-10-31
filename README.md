# Node.js API Server for OpenShift

Info on S2I at <https://github.com/sclorg/s2i-nodejs-container/blob/master/20/README.md>

Info on S2I at <https://github.com/openshift/source-to-image>

In Dev Spaces be sure to run `npm install` from Terminal before running/debugging.

## Notes for Webhooks

- Must apply `./deploy/webhooks-rolebinding.yaml` in same namespace as BuildConfig.
- Must be sure `ref: main` is specified in BuildConfig.
- Disable SSL checks in GitHub.