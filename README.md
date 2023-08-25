# API Documentation

This document outlines the available routes for accessing and managing places and their associated rants.

## General Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET    | `/`  | Home page |

## Place Endpoints

| Method | Path                 | Purpose                                |
|--------|----------------------|----------------------------------------|
| GET    | `/places`            | Places index page                       |
| POST   | `/places`            | Create new place                        |
| GET    | `/places/new`        | Form page for creating a new place      |
| GET    | `/places/:id`        | Details about a particular place        |
| PUT    | `/places/:id`        | Update a particular place               |
| GET    | `/places/:id/edit`   | Form page for editing an existing place |
| DELETE | `/places/:id`        | Delete a particular place               |

## Rant Endpoints

| Method | Path                           | Purpose                                        |
|--------|--------------------------------|------------------------------------------------|
| POST   | `/places/:id/rant`             | Create a rant (comment) about a particular place|
| DELETE | `/places/:id/rant/:rantId`     | Delete a rant (comment) about a particular place|

## Miscellaneous Endpoints

| Method | Path   | Purpose                                  |
|--------|--------|------------------------------------------|
| GET    | `*`    | 404 page (matches any route not defined) |
