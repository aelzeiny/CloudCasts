# Database Schema

## Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, indexed, unique
email          | string    | not null, indexed, unique
password_digest| string    | not null
session_token  | string    | not null, indexed, unique

## Podcasts
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
itunes_id      | integer   | not null, indexed, unique
contrast_color | string    | not null
name           | string    | not null
publisher      | string    | not null
summary        | string    | not null

## Categories
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
genre          | string    | not null, indexed, unique

## PodcastCategories
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
podcast_id     | integer   | not null, indexed, unique
category_id    | integer   | not null, indexed, unique

## Subscriptions
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, indexed, unique
podcast_id     | integer   | not null, indexed, unique
