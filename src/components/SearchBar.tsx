import React, { Component } from 'react';
import { AppStatus } from '../types/types';

interface SearchBarProps {
  searchTerm: string;
  status: AppStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export class SearchBar extends Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.onSearch();
  };

  render() {
    return (
      <header>
        <form className="max-w-3xl mx-auto" onSubmit={this.handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={this.props.searchTerm}
              onChange={this.props.onChange}
              autoComplete="off"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 backdrop-blur-lg"
              placeholder="Search a Star Wars character"
              disabled={this.props.status === AppStatus.loading}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={this.props.status === AppStatus.loading}
            >
              Search
            </button>
          </div>
        </form>
      </header>
    );
  }
}

export default SearchBar;
