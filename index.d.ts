declare function mkdirp (path: string, cb: (err: Error, made: string) => any): void;
declare function mkdirp (path: string, opts: mkdirp.Opts, cb: (err: Error, made: string) => any): void;

declare module mkdirp {
  export interface Opts {
    fs: any;
    mode: number;
  }

  export function sync (path: string, opts?: mkdirp.Opts): string;
}

export = mkdirp;
