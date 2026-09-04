# Kubernetes Ingress Docs Audit: Reasoning and Changelog

Working notes for the audit of `integrations/kubernetes-ingress/`. Uncommitted and not part of the docs build; use it for PR context, then delete or relocate as you like.

## Goal

Apply the same treatment used for the OAuth and webhook integration guides: cut instructions that belong to third parties and can be linked instead, keep the ngrok-specific core, fix inaccuracies, and clean up prose. Keep every guide accurate, shorter, and lower-maintenance.

## Scope

- 15 guides under `integrations/kubernetes-ingress/` (the `index.mdx` hub is excluded unless requested).
- No content is committed. Any deletions get a nav removal plus a redirect, as with Orbit and Clearbit.

## Approach: three buckets per file

1. **Outsource (link out):** third-party mechanics ngrok does not own. Cloud cluster provisioning (EKS, GKE, AKS, DigitalOcean), installing platforms and tools (Rancher, Rafay, Spectro Cloud, Argo CD, Consul, vcluster, External Secrets), and installing `kubectl`/Helm. Replace step-by-step instructions with a link to the vendor's own docs, keeping only what continuity requires.
2. **Keep (ngrok-owned core):** installing and configuring the ngrok Kubernetes Operator, CRDs, ingress and endpoint manifests, and Traffic Policy examples. This is the value of the guides.
3. **Fix or flag:** correct inaccuracies and stale references. When it is unclear whether content is ngrok-owned or third-party, keep it and flag rather than cut.

Two decisions set the depth:
- **Outsource third-party mechanics**, including cloud cluster provisioning and demo apps the vendor maintains.
- **Trim ngrok-operator install repetition** by linking the canonical install docs (`/gateway/k8s/installation/helm`, entry point `/gateway/k8s/`) instead of re-listing Helm steps in each guide, keeping per-platform specifics.

## Edges check (deprecated product)

An initial loose `grep edge` flagged four files, but a precise scan for the actual ngrok Edges product (`Edges`, `cloud-edge`, `Edge Route`, dashboard edge URLs) returned zero hits. The loose matches were false positives: "edge acceleration," "edge computing," "at the edge," and a GitHub doc filename `ingress-to-edge-relationship.md`. **No Edges rewrites are needed.** The one adjacent item is an external GitHub link in `azure-ad-k8s.mdx` pointing into the ngrok-operator repo, which is third-party and can be checked separately.

## Style rules

- No em dashes; reword instead.
- Avoid AI prose tells: no rote three-item lists, no filler ("it's important to note," "when it comes to"), no "not just X, it's Y" constructions, no needless summary conclusions, and no overused vocabulary (delve, robust, leverage, seamless, and similar).
- UI-agnostic: prefer `kubectl` and manifests over naming exact console buttons, tabs, and menus.
- American spelling, no exclamation points in prose, no "e.g."/"i.e." (Vale flags these).
- Every file must pass `vale integrations/kubernetes-ingress/` with zero errors.

## Verification

For every changed file:
- `vale` clean.
- em-dash grep clean.
- No broken internal anchors (grep for references to any removed/renamed section).
- **Adversarial review** by a separate agent that tries to break the change: confirm outsource links resolve, provider field names are real, ngrok manifests are unchanged except for deliberate fixes, YAML is valid, and no technically necessary step was dropped. Only confirmed issues are fixed.

## Exemplar: `azure-aks-k8s.mdx` (430 to 150 lines)

Chosen because it exercises both third-party outsourcing and prose cleanup.

**Cut (outsourced):**
- Cluster creation: the Azure-portal click-path became a link to Microsoft's [AKS quickstart](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal), verified current (updated 2026-07-03).
- The demo app: about 230 lines of inline YAML that is Microsoft's AKS Store demo. Our copy had already drifted from Microsoft's current version (they since added health probes and an ai-service), so linking the quickstart that deploys it is more accurate and lower-maintenance than maintaining a stale fork.

**Kept (ngrok core):** the ngrok `Ingress` manifest and the full OAuth / `NgrokTrafficPolicy` section.

**Made UI-agnostic:** deploy steps use `kubectl apply -f` instead of the Azure Portal "Create then Apply a YAML" flow.

**Fixes found during the edit:**
- The OAuth manifest referenced `game-2048`/`game-2048-ingress` (copy-pasted from another guide); corrected to this guide's `store-front`/`store-ingress`.
- Removed an em dash in the OAuth intro.
- Standardized the domain placeholder to `NGROK_DOMAIN` (the file mixed `NGROK_DOMAIN` and `<NGROK_DOMAIN>`).
- Prose pass: dropped the "in Azure, on-premises, or at the edge" triad and a snarky `custom-response` body.

Note: this file already treated operator install as a prerequisite link, so there was no inline Helm install to trim here. That part applies to guides that inline it.

## Process

Rollout ran as 5 editor batches (14 guides) plus the azure-aks exemplar, each followed by an independent adversarial review (a different agent per batch trying to break the edits: fetching every added link, diffing ngrok manifests, checking YAML, anchors, dropped steps, and style). Only confirmed findings were applied, in a final consolidation sweep. All 16 files pass Vale with zero errors and contain no em dashes.

## Per-file changelog

| File | Outsourced to vendor docs | Operator-install trimmed | Fixes / flags |
|------|---------------------------|--------------------------|---------------|
| azure-aks-k8s.mdx (exemplar) | AKS cluster creation + AKS Store demo app (Microsoft quickstart) | N/A (prereq link) | game-2048 to store-front; placeholder consistency; NGROK_DOMAIN URL; CEL body; prose |
| apiops.mdx | Argo CD install (Argo CD getting-started) | N/A (prereq) | contradictory prereqs consolidated; em dashes; rate-limit action link |
| azure-ad-k8s.mdx | cluster + Online Boutique (GoogleCloudPlatform/microservices-demo) | Yes (removed inline Helm + deprecated chart name) | dead GitHub links to in-repo docs; /k8s to /gateway/k8s/; install link to quickstart; FLAG: Entra console steps kept (no UI-agnostic path) |
| consul-k8s.mdx | Consul mesh install (HashiCorp get-started) | Defers credentials to quickstart | namespace fix; YAML indentation; helm upgrade + --namespace; --set-string note; ServiceIntentions apply step + filename; wrong app "2048"; dead link; FLAG: ngrok-operator Service namespace |
| digitalocean-k8s.mdx | DOKS provisioning (DigitalOcean create-clusters) | Yes (prereq) | namespace fix; dropped Prometheus/Grafana detour; sidebarTitle; install link; prereq dedup |
| eks.mdx | aws/eksctl/kubeconfig (AWS getting-started + create-kubeconfig) | N/A | stale line reference removed; NGROK_DOMAIN URL; CEL body |
| external-secrets.mdx | External Secrets Operator install (external-secrets getting-started) | N/A | conservative; verified provider API versions unchanged |
| google-kubernetes-engine.mdx | GKE provisioning + gcloud auth (Google cluster-creation + access) | Yes (repointed) | namespace fix; line reference fix; gcloud wording; install link; CEL body |
| gslb.mdx | none (ngrok-owned) | N/A | duplicate blog URL fixed; em dashes; agent-config v3 link |
| k8s.mdx (Linkerd) | Linkerd + minikube install (Linkerd getting-started + minikube) | N/A | UI-agnostic domain step; web-svc service wording; dropped unverifiable ref |
| microk8s-k8s.mdx | MicroK8s install (Canonical get-started) | N/A | added missing kubectl apply; placeholder; Gateway HTTPS to HTTP/80; What's-next |
| rafay-k8s.mdx | Rafay UI click-paths (Rafay docs) | Yes | namespace fix; stale chart version; marketing link to /gateway/k8s/; blueprint framing; install link |
| rancher-k8s.mdx | Rancher/Docker install (Rancher docs) | N/A (prereq) | stale "Ingress Controller" naming; marketing link; NGINX line reworded; removed Docker cleanup |
| spectro-cloud-k8s.mdx | Palette UI (Spectro Cloud docs) | N/A (ngrok pack) | namespace mismatch bug; ordering inaccuracy; placeholder; traffic-policy link |
| vcluster-k8s.mdx | minikube + vcluster install (minikube + vcluster docs) | Added install link | operator-flow inaccuracy; em dash; NGROK_DOMAIN URL; CEL body; install link |

## Adversarial review outcomes

Every batch passed with no unresolved CONFIRMED defects. The reviews independently confirmed the editors' bug fixes (four namespace mismatches, a missing `kubectl apply`, a duplicated blog URL, a broken Helm command) and surfaced the issues fixed in consolidation: the wrong operator-install link (my spec had pointed at the Helm values reference instead of the install quickstart), the consul `helm upgrade` missing `--namespace ngrok-operator`, the `--set-string` explanation, the `NGROK_DOMAIN.ngrok.app` double-suffix, the CEL-interpolation example regression, and the microk8s gateway `protocol: HTTPS`/`port: 80` mismatch.

## Open flags (need a human call)

- **consul-k8s.mdx:** the guide defines a `Service` named `ngrok-operator` in the `consul` namespace with selector `app.kubernetes.io/name: ngrok-operator`, but the operator pods install into the `ngrok-operator` namespace. A Service only selects pods in its own namespace, so this Service may never get endpoints. Pre-existing; left as-is because it may be an intentional Consul naming placeholder. Worth an operator SME's confirmation.
- **azure-ad-k8s.mdx:** the Microsoft Entra enterprise-app creation genuinely has no `kubectl`/manifest equivalent, so those steps still reference console buttons. Kept intentionally.
