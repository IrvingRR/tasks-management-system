<script>
    export default {
        name: 'Checkbox',
        props: ['name', 'value', 'id', 'label']
    }
</script>

<template>
    <div class="field">
        <input type="checkbox" :name="name" :id="id" :value="value">
        <label class="label" :for="id">{{ label }}</label>
    </div>
</template>

<style scoped>
    .field input {
        display: none;
    }
   .label {
        display: inline-flex;
        padding: 10px 20px;
        background-color: var(--background-secondary-color);
        margin-top: 10px;
        border-radius: var(--radius);
        cursor: pointer;
        gap: 8px;
        align-items: center;
        font-size: var(--fs-s);
        transition: var(--transition);
   }

   .label::before {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border: 1px solid var(--primary-color);
   }

   .field input:checked ~ label  {
    background-color: var(--primary-color);
   }

   .field input:checked ~ label::before  {
    background-color: var(--background-secondary-color);
   }
</style>