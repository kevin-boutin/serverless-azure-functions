import { InterpolateParameters } from "clvr";

export interface DefaultParameters extends InterpolateParameters {
  serviceName: string;
  configName: string;
  runtime: string;
  region: string;
}

export interface ConfigurationParameters {
  [config: string]: DefaultParameters
}

export const defaultParameters: ConfigurationParameters = {
  "dotnet22-linux": {
    serviceName: "dt22-lin",
    configName: "dotnet22-linux",
    runtime: "dotnet",
    region: "weur",
  },
  "dotnet22-windows": {
    serviceName: "dt22-win",
    configName: "dotnet22-windows",
    runtime: "dotnet",
    region: "weur",
  },
  "dotnet31-linux": {
    serviceName: "dt31-lin",
    configName: "dotnet31-linux",
    runtime: "dotnet",
    region: "weur",
  },
  "dotnet31-windows": {
    serviceName: "dt31-win",
    configName: "dotnet31-windows",
    runtime: "dotnet",
    region: "weur",
  },
  "node14-linux": {
    serviceName: "nd14-lin",
    configName: "node14-linux",
    runtime: "node v14.",
    region: "weur",
  },
  "node14-linux-external": {
    serviceName: "nd14-lin-ext",
    configName: "node14-linux-external",
    runtime: "node v14.",
    region: "weur",
  },
  "node14-windows": {
    serviceName: "nd14-win",
    configName: "node14-windows",
    runtime: "node v14.",
    region: "weur",
  },
  "node14-windows-webpack": {
    serviceName: "nd14-win-web",
    configName: "node14-windows-webpack",
    runtime: "node v14.",
    region: "weur",
  },
  "node12-linux": {
    serviceName: "nd12-lin",
    configName: "node12-linux",
    runtime: "node v12.",
    region: "weur",
  },
  "node12-linux-external": {
    serviceName: "nd12-lin-ext",
    configName: "node12-linux-external",
    runtime: "node v12.",
    region: "weur",
  },
  "node12-windows": {
    serviceName: "nd12-win",
    configName: "node12-windows",
    runtime: "node v12.",
    region: "weur",
  },
  "node12-windows-premium": {
    serviceName: "nd12-win-prem",
    configName: "node12-windows-premium",
    runtime: "node v12.",
    region: "cus",
  },
  "node12-windows-webpack": {
    serviceName: "nd12-win-web",
    configName: "node12-windows-webpack",
    runtime: "node v12.",
    region: "weur",
  },
  "python36": {
    serviceName: "py36",
    configName: "python36",
    runtime: "python 3.6",
    region: "cus",
  },
  "python36-premium": {
    serviceName: "py36-prem",
    configName: "python36-premium",
    runtime: "python 3.6",
    region: "weur",
  },
  "python37": {
    serviceName: "py37",
    configName: "python37",
    runtime: "python 3.7",
    region: "weur",
  },
  "python38": {
    serviceName: "py38",
    configName: "python38",
    runtime: "python 3.8",
    region: "weur",
  }
}
