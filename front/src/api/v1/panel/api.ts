/* tslint:disable */
/* eslint-disable */
/**
 * Users
 * Users endpoint
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Login
 */
export interface Login {
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    'traceId'?: string;
}
/**
 * 
 * @export
 * @interface SignIn
 */
export interface SignIn {
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    'email': string;
}
/**
 * 
 * @export
 * @interface SignedUser
 */
export interface SignedUser {
    /**
     * 
     * @type {string}
     * @memberof SignedUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SignedUser
     */
    'id': string;
}
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    'token': string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'birthday': string;
}
/**
 * 
 * @export
 * @interface UserFilter
 */
export interface UserFilter {
    /**
     * 
     * @type {string}
     * @memberof UserFilter
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UserFilter
     */
    'birthday': string;
}

/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (login?: Login, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(login, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(login?: Login, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(login, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginApiFp(configuration)
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(login?: Login, options?: any): AxiosPromise<Token> {
            return localVarFp.login(login, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI {
    /**
     * 
     * @summary Login to page
     * @param {Login} [login] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public login(login?: Login, options?: AxiosRequestConfig) {
        return LoginApiFp(this.configuration).login(login, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SigninApi - axios parameter creator
 * @export
 */
export const SigninApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn: async (signIn?: SignIn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SigninApi - functional programming interface
 * @export
 */
export const SigninApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SigninApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signIn(signIn?: SignIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signIn(signIn, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SigninApi - factory interface
 * @export
 */
export const SigninApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SigninApiFp(configuration)
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn(signIn?: SignIn, options?: any): AxiosPromise<void> {
            return localVarFp.signIn(signIn, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SigninApi - object-oriented interface
 * @export
 * @class SigninApi
 * @extends {BaseAPI}
 */
export class SigninApi extends BaseAPI {
    /**
     * 
     * @summary Sign in
     * @param {SignIn} [signIn] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SigninApi
     */
    public signIn(signIn?: SignIn, options?: AxiosRequestConfig) {
        return SigninApiFp(this.configuration).signIn(signIn, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete user
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteUser', 'id', id)
            const localVarPath = `/user/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Search users using filters
         * @param {UserFilter} userFilter Filter users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filterUsers: async (userFilter: UserFilter, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userFilter' is not null or undefined
            assertParamExists('filterUsers', 'userFilter', userFilter)
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userFilter, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an user by its id
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/user/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an user by its id
         * @param {number} id ID of the user
         * @param {User} [user] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (id: number, user?: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUser', 'id', id)
            const localVarPath = `/user/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete user
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Search users using filters
         * @param {UserFilter} userFilter Filter users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filterUsers(userFilter: UserFilter, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filterUsers(userFilter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get an user by its id
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Returns all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an user by its id
         * @param {number} id ID of the user
         * @param {User} [user] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(id: number, user?: User, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(id, user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Create new user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(options?: any): AxiosPromise<User> {
            return localVarFp.createUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete user
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Search users using filters
         * @param {UserFilter} userFilter Filter users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filterUsers(userFilter: UserFilter, options?: any): AxiosPromise<Array<User>> {
            return localVarFp.filterUsers(userFilter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an user by its id
         * @param {number} id ID of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(id: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<User>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an user by its id
         * @param {number} id ID of the user
         * @param {User} [user] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(id: number, user?: User, options?: any): AxiosPromise<void> {
            return localVarFp.updateUser(id, user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Create new user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).createUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete user
     * @param {number} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(id: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteUser(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Search users using filters
     * @param {UserFilter} userFilter Filter users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public filterUsers(userFilter: UserFilter, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).filterUsers(userFilter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an user by its id
     * @param {number} id ID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(id: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUser(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUsers(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an user by its id
     * @param {number} id ID of the user
     * @param {User} [user] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(id: number, user?: User, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateUser(id, user, options).then((request) => request(this.axios, this.basePath));
    }
}


