{
  description = "ngrok docs";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        pnpm-shim = pkgs.writeShellScriptBin "pnpm" ''
          #!${pkgs.bash}/bin/bash
          exec ${pkgs.lib.getBin pkgs.nodejs_20}/bin/node ${pkgs.lib.getBin pkgs.nodejs_20}/bin/corepack pnpm "$@"
        '';
      in
      {
        devShell = pkgs.mkShell {
          shellHook = ''
            export PATH="$PATH:$(git rev-parse --show-toplevel)/node_modules/.bin"
          '';
          buildInputs = with pkgs; [
            nodejs_20
            corepack_20
            pnpm-shim
          ];
        };
      });
}
