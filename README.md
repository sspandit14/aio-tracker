# All-in-One Tracker :3

An all-in-one tracker that collates media consumption, ratings, and thoughts across various mediums (video games, books, movies, etc.)

## Current features/functionality

- PostgreSQL database storing items with the following fields:
    - Name
    - Type
    - Status (e.g. planning or completed)
    - Progress
    - Rating
    - Timestamps

## Prerequisites

Install:
- Docker + Docker Compose
    - Local PostgreSQL not required, instead we run PostgreSQL in a Docker container

## Configuration

Create a local environment file (.env), copy the contents of .env.example, and replace the placeholder values with actual values
```sh
cp .env.example .env
```

## Start PostgreSQL

Start the database:

```sh
docker compose up -d
```

Check its status:

```sh
docker compose ps
```

PostgreSQL is ready when its status is `healthy`.

During the initial startup in a new/empty Docker volume PostgreSQL will automatically run `migrations/init.sql` and `seed.sql` to create the schema and insert the sample data.

These initialization scripts run only when the database volume is empty. Restarting an existing database does not run them again.

## Inspect the database

Start an interactive PostgreSQL session:

```sh
docker compose exec postgres sh -c \
  'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
```

View the items without interactive session:

```sh
docker compose exec -T postgres sh -c \
  'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "TABLE items;"'
```

## Reset the development database

Delete all existing items and restore sample data.

Run:

```sh
docker compose exec -T postgres sh -c \
  'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /scripts/reset.sql'
```

The reset is transactional. If it fails, then PostgreSQL rolls back the transaction instead of leaving a partial schema.

## Stop PostgreSQL

```sh
docker compose down
```

Database service stops and removes the container, but database contents persist in the `postgres_data` volume.

## Delete all local database data

```sh
docker compose down -v
```
Permanently delete the local PostgreSQL volume and its data (doing `docker compose up` will create a new volume and re-run the init and seed scripts).

## Troubleshooting

### Validate the Compose configuration

```sh
docker compose config --quiet
```

The configuration intentionally fails if a required PostgreSQL environment variable is missing or empty.

### View PostgreSQL logs

```sh
docker compose logs postgres
```

Follow new log output continuously with:

```sh
docker compose logs -f postgres
```

### Port 5432 is already in use

Another PostgreSQL server or container may already be using port 5432. Identify and stop the conflicting service, or change the host-side port in `compose.yaml`.

PostgreSQL is bound to `127.0.0.1`, so it is available from the local computer but is not exposed on every network interface.

### Schema changes are not appearing

Editing `migrations/init.sql` does not modify an existing database. Initialization scripts only run for a new, empty volume.

During this early development stage, either:

- update the database manually; or
- reset/delete the disposable local database as appropriate.

A proper incremental migration workflow will be introduced later.
