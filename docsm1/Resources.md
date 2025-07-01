# Recursos : Resources

All Resources have the Get, Post, Patch, Put and Delete methods.

## Users (utilizadores)

Provides information on a user. Every user has:
- UserID int
- UserName String
- Email string

## Ideas (Ideias)

Provides information on an Idea. Every Idea has:
- IdeaID int
- Title string
- Description string
- CreatedDate date
- UserID int
- CategoryID int
- StatusID int

## IdeaStatus (Status das ideias)

Provides information on a Status Idea. Every IdeaStatus has:
- StatusID int
- StatusName String

## IdeaCategories (Categorias de ideias)

Provides information on a Category Idea. Every IdeaCategory has:
- CategoryID int
- CategoryName String
