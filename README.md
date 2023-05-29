# Crypto Collectable Wallet

⚠️⚠️⚠️ This is a React API practice project

## ⚡Features⚡

1. List Page with Infinity scroll<br>
   Auto fetch another 20 items when scroll over the half height of document

2. Detail Page<br>
   Show the image and the description of the item


## Before getting start

Tech stacks

#### Front-end

1. [Vite](https://vitejs.dev/)
2. [React v18](https://beta.reactjs.org/)
3. [TypeScript](https://www.typescriptlang.org/docs/)
4. [Tailwind v3](https://tailwindcss.com/)
5. [React Query v5](https://tanstack.com/query/v5)
6. [React Router v6](https://reactrouter.com/en/main)
7. [Chakra UI](https://chakra-ui.com/)

## Install

1. Clone this repository & install dependencies.
```shell
git clone https://github.com/j7-dev/Crypto-Collectable-Wallet.git

cd ./Crypto-Collectable-Wallet

yarn install

yarn dev
```

2. That's it. Enjoy the dev 🎉🎉🎉<br /><br /><br />

## Build

```shell
yarn build # build the project with .env.dev

yarn build:prod # build the project with .env.production
```
<br /><br /><br />
## Functions:

path: `/src/api/resources`

### `getResource`

#### - Properties:

```typescript
{
  resource: string;
  // resources in OpenSea API doc
  // ex: asset, collection, event, bundle
  pathParams?: string[];
  // URL PATH PARAMS
  // ex: ['0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', '1']
  args?: {
    [key: string]: string;
  },
  // URL QUERY STRING PARAMS
	// ex: { limit: '20', offset: '0' }
}
```

#### - Return:
```typescript
AxiosResponse<any, any>;
```

### `getResources`

#### - Properties:


```typescript
{
  resource: string;
  // resources in OpenSea API doc
  // ex: asset, collection, event, bundle
  args?: {
    [key: string]: string;
  },
  // URL QUERY STRING PARAMS
	// ex: { limit: '20', offset: '0' }
}
```

#### - Return:

```typescript
AxiosResponse<any, any>;
```
<br /><br /><br />

## Custom Hooks

### `useOne`

#### - Properties:

```typescript
{
  resource: string;
  pathParams?: string[];
  args?: [key:string]:string;
  queryOptions?: {
    staleTime?: number;
    cacheTime?: number;
    refetchOnWindowFocus?: boolean;
    refetchOnMount?: boolean;
    refetchOnReconnect?: boolean;
    refetchInterval?: number;
    retry?: boolean | number;
    retryDelay?: number;
    enabled?: boolean;
  }
}
```

#### - Return:
```typescript
UseQueryResult<AxiosResponse<any, any>, unknown>;
// get resource with react-query
```


### `useMany`

#### - Properties:

```typescript
{
  resource: string;
  args?: Record<string, any>;
  queryOptions?: {
    staleTime?: number;
    cacheTime?: number;
    refetchOnWindowFocus?: boolean;
    refetchOnMount?: boolean;
    refetchOnReconnect?: boolean;
    refetchInterval?: number;
    retry?: boolean | number;
    retryDelay?: number;
    enabled?: boolean;
  }
}
```

#### - Return:

```typescript
UseQueryResult<AxiosResponse<any, any>, unknown>;
// get resources with react-query
```


### `useReadMore`

#### - Properties:

```typescript
{
  originText: string;
  limit?: number; // set the limit of text
}
```

#### - Return:

```typescript
{
	renderText: () => string | JSX.Element; // text render function
}
```


### `useInfinityScroll`

#### - Properties:

```typescript
{
  setQueryParams: React.Dispatch<React.SetStateAction<TQuerryParams>>;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  list: T[];
}
```

#### - Return:

```typescript
{
  copyList: T[]; // item list for render
  isBottom: boolean; // indicate if we are in threshold of the bottom
}
```


## Thank you for your time 🎉
