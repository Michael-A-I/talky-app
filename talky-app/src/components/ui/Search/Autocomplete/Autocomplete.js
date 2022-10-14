import React from "react"
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js"
import Autocomplete from "./Autocomplete"

function Autocompleter(props) {
  const searchClient = props.searchClient

  return (
    <>
      <Autocomplete
        Style={{ borderBotton: "none" }}
        searchClient={searchClient}
        openOnFocus={true}
        // detachedMediaQuery="none"
        placeholder="Search Projects"
        getSources={({ query }) => [
          {
            sourceId: "posts",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "projects",
                    query
                  }
                ]
              })
            },
            templates: {
              item({ item, components }) {
                return (
                  <>
                    <PostsHits hit={item} components={components} />
                  </>
                )
              },
              noResults() {
                return "No posts for this query."
              }
            }
          }
        ]}
      />
    </>
  )
}

export default Autocomplete
