<script setup>
  import { ref } from 'vue';
  import { useReferencesStore } from '@/stores/references';
  import RefComponent from '../components/RefComponent.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const referencesStore = useReferencesStore();
  const showForm = ref(false);
  const editingId = ref(null);
  const showRefs = ref(false);
  const formData = ref({
    name: '',
    titles: [
      {
        role: '',
        company: ''
      },
      {
        role: '',
        company: ''
      }
    ],
    company: '',
    email: '',
    phone: '',
  });

  const resetForm = () => {
    formData.value = {
      name: '',
      titles: [
        {
          role: '',
          company: ''
        },
        {
          role: '',
          company: ''
        }
      ],
      company: '',
      email: '',
      phone: '',
    };
    editingId.value = null;
  };

  const openAddForm = () => {
    resetForm();
    showForm.value = true;
  };

  const openEditForm = (reference) => {
    formData.value = { ...reference };
    editingId.value = reference.id;
    showForm.value = true;
  };

  const saveReference = () => {
    if (editingId.value) {
      referencesStore.updateReference(editingId.value, formData.value);
    } else {
      referencesStore.addReference(formData.value);
    }
    showForm.value = false;
    resetForm();
  };

  const deleteReference = (id) => {
    if (confirm('Are you sure you want to delete this reference?')) {
      referencesStore.deleteReference(id);
    }
  };

  const closeForm = () => {
    showForm.value = false;
    resetForm();
  };
</script>
<template>
  <div class="mt-references-section">

    <label class="label cursor-pointer mt-10 mb-4 print:hidden">
      <span class="label-text mr-2">Show References Section</span>
      <input type="checkbox" class="toggle toggle-primary" v-model="showRefs" />
    </label>

    <div class="flex items-center justify-between mb-4" v-if="showRefs && referencesStore.allReferences.length >= 0">
      <h2 class="subtitle text-lg font-bold mt-3 mb-1 border-b-2 border-primary pb-1">References</h2>
      <button @click="openAddForm" class="btn btn-sm btn-primary print:hidden">
        <FontAwesomeIcon :icon="['fa', 'plus']" /> Add Reference
      </button>
    </div>

    <!-- Add/Edit Form Modal -->
    <div v-if="showForm" class="modal modal-open">
      <div class="modal-box w-11/12 max-w-2xl">
        <h3 class="font-bold text-lg mb-4">{{ editingId ? 'Edit Reference' : 'Add Reference' }}</h3>
        
        <div class="space-y-3">
          <div class="form-control">
            <div><label class="label"><span class="label-text">Name</span></label></div>
            <input v-model="formData.name" type="text" placeholder="Full name" class="input input-bordered" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="form-control">
              <div><label class="label"><span class="label-text">Title</span></label></div>
              <input v-model="formData.titles[0].role" type="text" placeholder="Job title" class="input input-bordered" />
            </div>
            <div class="form-control">
              <div><label class="label"><span class="label-text">Company</span></label></div>
              <input v-model="formData.titles[0].company" type="text" placeholder="Company name" class="input input-bordered" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="form-control">
              <div><label class="label"><span class="label-text">Title</span></label></div>
              <input v-model="formData.titles[1].role" type="text" placeholder="Job title" class="input input-bordered" />
            </div>
            <div class="form-control">
              <div><label class="label"><span class="label-text">Company</span></label></div>
              <input v-model="formData.titles[1].company" type="text" placeholder="Company name" class="input input-bordered" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="form-control">
              <div><label class="label"><span class="label-text">Email</span></label></div>
              <input v-model="formData.email" type="email" placeholder="Email address" class="input input-bordered" />
            </div>
            <div class="form-control">
              <div><label class="label"><span class="label-text">Phone</span></label></div>
              <input v-model="formData.phone" type="tel" placeholder="Phone number" class="input input-bordered" />
            </div>
          </div>
        </div>

        <div class="modal-action mt-6">
          <button @click="closeForm" class="btn btn-ghost">Cancel</button>
          <button @click="saveReference" class="btn btn-primary">Save Reference</button>
        </div>
      </div>
      <div class="modal-backdrop" @click="closeForm"></div>
    </div>

    <!-- References List -->
    <div class="mt-6 space-y-4" v-if="showRefs">
      <div v-if="referencesStore.allReferences.length === 0" class="alert alert-info">
        <FontAwesomeIcon :icon="['fa', 'info-circle']" />
        <span>No references added yet. Click "Add Reference" to get started.</span>
      </div>

      <div v-for="reference in referencesStore.allReferences" :key="reference.id" class="">
        <RefComponent
          :person="reference.name"
          :titles="reference.titles"
          :phone="reference.phone"
          :email="reference.email"
        />

        <div class="flex justify-end gap-2 mt-2 print:hidden">
          <button @click="openEditForm(reference)" class="btn btn-sm btn-secondary">
            <FontAwesomeIcon :icon="['fa', 'edit']" /> Edit
          </button>
          <button @click="deleteReference(reference.id)" class="btn btn-sm btn-error">
            <FontAwesomeIcon :icon="['fa', 'trash']" /> Delete
          </button>
        </div>
      </div>
    </div>
  </div>

</template>