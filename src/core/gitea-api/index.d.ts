import { string, object } from "prop-types";
import { APIConfig } from './core';

export interface AuthObject {
  user: object | null | undefined;
  token: string;
  config: APIConfig;
}

export interface AuthToken {
  sha1: string;
}

export interface AuthConfigObject {
  headers: object;
}