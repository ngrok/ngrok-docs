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
        node-toolchain = with pkgs; [
          nodejs
          nodePackages.pnpm
        ];
      in
      {
        devShell = pkgs.mkShell {
          shellHook = ''
            export PATH="$PATH:$(git rev-parse --show-toplevel)/node_modules/.bin"
          '';
          buildInputs = with pkgs; [
            node-toolchain
          ];
        };
      });
}
