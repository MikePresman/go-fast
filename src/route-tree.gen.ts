/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CodeEditorImport } from './routes/code-editor'
import { Route as IndexImport } from './routes/index'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as NotesNoteIdImport } from './routes/notes/$noteId'

// Create/Update Routes

const CodeEditorRoute = CodeEditorImport.update({
  path: '/code-editor',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesIndexRoute = NotesIndexImport.update({
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdRoute = NotesNoteIdImport.update({
  path: '/notes/$noteId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/code-editor': {
      id: '/code-editor'
      path: '/code-editor'
      fullPath: '/code-editor'
      preLoaderRoute: typeof CodeEditorImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteId': {
      id: '/notes/$noteId'
      path: '/notes/$noteId'
      fullPath: '/notes/$noteId'
      preLoaderRoute: typeof NotesNoteIdImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      id: '/notes/'
      path: '/notes'
      fullPath: '/notes'
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/code-editor': typeof CodeEditorRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/code-editor': typeof CodeEditorRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/code-editor': typeof CodeEditorRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
  '/notes/': typeof NotesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/code-editor' | '/notes/$noteId' | '/notes'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/code-editor' | '/notes/$noteId' | '/notes'
  id: '__root__' | '/' | '/code-editor' | '/notes/$noteId' | '/notes/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CodeEditorRoute: typeof CodeEditorRoute
  NotesNoteIdRoute: typeof NotesNoteIdRoute
  NotesIndexRoute: typeof NotesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CodeEditorRoute: CodeEditorRoute,
  NotesNoteIdRoute: NotesNoteIdRoute,
  NotesIndexRoute: NotesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/code-editor",
        "/notes/$noteId",
        "/notes/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/code-editor": {
      "filePath": "code-editor.tsx"
    },
    "/notes/$noteId": {
      "filePath": "notes/$noteId.tsx"
    },
    "/notes/": {
      "filePath": "notes/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
