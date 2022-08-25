import Vue from 'vue'
import filters from '@/src/utils/filters';

for (const filter in filters) {
  if (filters.hasOwnProperty(filter)) {
    Vue.filter(filter, filters[filter])
  }
}