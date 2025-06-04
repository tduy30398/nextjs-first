import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt desc) {
  _id, title, slug, _createdAt,
    views, description, category, image,
    author -> {
      _id, name, image, bio
    }
}
`)

export const STARTUP_QUERY_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, title, slug, _createdAt, pitch,
    views, description, category, image,
    author -> {
      _id, name, image, bio, userName
    }
}
`)

export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, views
}
`)

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`*[_type == "author" && id == $id][0] {
  _id,
  id,
  name,
  image,
  bio,
  userName,
  email
}
`)

export const AUTHOR_BY_ID_QUERY = defineQuery(`*[_type == "author" && _id == $id][0] {
  _id,
  id,
  name,
  image,
  bio,
  userName,
  email
}
`)

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`*[_type == "startup" && author._ref == $id ] | order(_createdAt desc) {
  _id, title, slug, _createdAt,
  views, description, category, image,
  author -> {
    _id, name, image, bio
  }
}
`)