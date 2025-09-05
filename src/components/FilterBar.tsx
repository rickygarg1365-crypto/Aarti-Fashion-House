'use client';

import { useState } from 'react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterBarProps {
  filters: {
    [key: string]: FilterOption[];
  };
  activeFilters: {
    [key: string]: string[];
  };
  onFilterChange: (filterType: string, value: string) => void;
  onClearAll: () => void;
  resultCount: number;
}

export default function FilterBar({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  resultCount,
}: FilterBarProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile filter button */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <p className="text-sm text-gray-700">
            {resultCount} {resultCount === 1 ? 'result' : 'results'}
          </p>
          <button
            type="button"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FunnelIcon className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Desktop filters */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              {Object.entries(filters).map(([filterType, options]) => (
                <div key={filterType} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenFilter(openFilter === filterType ? null : filterType)}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span className="capitalize">
                      {filterType.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {activeFilters[filterType]?.length > 0 && (
                      <span className="ml-2 rounded-full bg-red-primary px-2 py-0.5 text-xs text-white">
                        {activeFilters[filterType].length}
                      </span>
                    )}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </button>

                  {openFilter === filterType && (
                    <div className="absolute left-0 z-10 mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-lg">
                      <div className="p-2">
                        {options.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={activeFilters[filterType]?.includes(option.value) || false}
                              onChange={() => onFilterChange(filterType, option.value)}
                              className="h-4 w-4 rounded border-gray-300 text-red-primary focus:ring-red-primary"
                            />
                            <span className="ml-3 flex-1">{option.label}</span>
                            {option.count && (
                              <span className="text-xs text-gray-400">({option.count})</span>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-700">
                {resultCount} {resultCount === 1 ? 'result' : 'results'}
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-sm text-red-primary hover:text-red-hover font-medium"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filters panel */}
        {showMobileFilters && (
          <div className="lg:hidden">
            <div className="border-t border-gray-200 py-4">
              {Object.entries(filters).map(([filterType, options]) => (
                <div key={filterType} className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 capitalize">
                    {filterType.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          checked={activeFilters[filterType]?.includes(option.value) || false}
                          onChange={() => onFilterChange(filterType, option.value)}
                          className="h-4 w-4 rounded border-gray-300 text-red-primary focus:ring-red-primary"
                        />
                        <span className="ml-3 flex-1">{option.label}</span>
                        {option.count && (
                          <span className="text-xs text-gray-400">({option.count})</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="w-full rounded-md border border-red-primary bg-white px-4 py-2 text-sm font-medium text-red-primary hover:bg-red-50"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="border-t border-gray-200 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {Object.entries(activeFilters).map(([filterType, values]) =>
                values.map((value) => (
                  <span
                    key={`${filterType}-${value}`}
                    className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
                  >
                    {value}
                    <button
                      type="button"
                      onClick={() => onFilterChange(filterType, value)}
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-red-400 hover:bg-red-200 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Click outside handler */}
      {openFilter && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setOpenFilter(null)}
        />
      )}
    </div>
  );
}
