CREATE TYPE item_status AS ENUM('planning', 'ongoing', 'dropped', 'on hold', 'completed');

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    status item_status NOT NULL,
    progress_text TEXT,
    rating NUMERIC(3, 1),
    CHECK(rating IS NULL OR (rating >= 0 AND rating <= 10)),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);