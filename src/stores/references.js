import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useReferencesStore = defineStore('references', () => {
  // State
  const references = ref([
  ])

  // Getters
  const allReferences = computed(() => references.value)
  const referenceCount = computed(() => references.value.length)
  const getReferenceById = computed(() => (id) => {
    return references.value.find(ref => ref.id === id)
  })

  // Actions
  function addReference(reference) {
    const newId = Math.max(...references.value.map(r => r.id), 0) + 1
    references.value.push({
      id: newId,
      ...reference
    })
  }

  function updateReference(id, updates) {
    const index = references.value.findIndex(ref => ref.id === id)
    if (index !== -1) {
      references.value[index] = {
        ...references.value[index],
        ...updates
      }
    }
  }

  function deleteReference(id) {
    const index = references.value.findIndex(ref => ref.id === id)
    if (index !== -1) {
      references.value.splice(index, 1)
    }
  }

  function clearAllReferences() {
    references.value = []
  }

  function loadSampleReferences() {
    references.value = [
      {
        name: 'John Smith',
        titles: [
          {
            role: 'Senior Engineering Manager',
            company: 'Tech Corp'
          }
        ],
        email: 'john.smith@techcorp.com',
        phone: '+1.555.123.4567',
      },
      {
        name: 'Sarah Johnson',
        titles: [
          {
            role: 'CTO',
            company: 'StartUp Inc'
          }
        ],
        email: 'sarah@startupinc.com',
        phone: '+1.555.987.6543',
      }
    ]
  }

  return {
    // State
    references,
    // Getters
    allReferences,
    referenceCount,
    getReferenceById,
    // Actions
    addReference,
    updateReference,
    deleteReference,
    clearAllReferences,
    loadSampleReferences
  }
}, {
  persist: true
})
