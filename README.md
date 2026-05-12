# Physical AI & World Model Study

MkDocs Material 기반의 Physical AI & World Model 스터디 문서 사이트입니다.

## Local Development

이 프로젝트는 `uv`로 Python 환경과 MkDocs 실행을 관리합니다.

```bash
uv sync
uv run mkdocs serve
```

로컬 서버가 실행되면 안내되는 주소에서 사이트를 확인할 수 있습니다.

## Build Check

배포 전에는 아래 명령으로 문서 빌드를 확인합니다.

```bash
uv run mkdocs build --strict
```

GitHub Pages 배포 workflow도 동일하게 `uv sync --locked`와 `uv run mkdocs gh-deploy --force`를 사용합니다.
