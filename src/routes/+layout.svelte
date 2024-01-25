<script lang="ts">
  // TODO: To avoid environment bug try to (temporarily) import the component
  // from `AppLayoutDev` instead of `AppLayout`.
  import AppLayout from '@/src/components/app/AppLayout/AppLayout.svelte';
</script>

<AppLayout>
  <slot>Content</slot>
</AppLayout>
