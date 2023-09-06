<script setup>
import { useComparisonsStore } from '@/app/stores/modules/comparison';
import { defineProps } from 'vue';
import { ROUTES } from '@/app/router/helper';
import { storeToRefs } from 'pinia';

const comparisonsStore = useComparisonsStore();
const { сomparisonСount } = storeToRefs(comparisonsStore);

const props = defineProps({
    active: {
        type: Boolean
    },
    count: {
        type: Boolean
    }
});

const { active, count } = props;
</script>

<template>
    <RouterLink :to="ROUTES.compare" class="compare" :class="{ active }">
        <i v-if="count">{{ сomparisonСount }}</i>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.22136 23.6204H22.3284M12.2748 23.6204V6.02676M12.2748 6.02676C13.663 6.02676 14.7882 4.90149 14.7882 3.51338M12.2748 6.02676C10.8868 6.02676 9.7615 4.90149 9.7615 3.51338M14.7882 3.51338C14.7882 2.12528 13.663 1 12.2748 1C10.8868 1 9.7615 2.12528 9.7615 3.51338M14.7882 3.51338H22.3284M9.7615 3.51338H2.22136M4.73474 18.5937C6.63553 18.5937 8.20778 17.536 8.46725 15.7678C8.48369 15.6557 8.49192 15.5996 8.48548 15.4753C8.48103 15.3895 8.45195 15.2328 8.42534 15.151C8.38678 15.0327 8.34005 14.9496 8.24659 14.7834L4.73474 8.54015L1.22288 14.7834C1.13623 14.9375 1.09291 15.0145 1.05283 15.1483C1.02818 15.2306 0.999639 15.4282 1 15.514C1.00058 15.6538 1.00903 15.6906 1.02594 15.7644C1.34635 17.161 2.88498 18.5937 4.73474 18.5937ZM19.815 18.5937C21.7159 18.5937 23.2881 17.536 23.5475 15.7678C23.5639 15.6557 23.5722 15.5996 23.5657 15.4753C23.5613 15.3895 23.5323 15.2328 23.5056 15.151C23.4671 15.0327 23.4203 14.9496 23.3268 14.7834L19.815 8.54015L16.3032 14.7834C16.2166 14.9375 16.1732 15.0145 16.1331 15.1483C16.1085 15.2306 16.08 15.4282 16.0802 15.514C16.0809 15.6538 16.0893 15.6906 16.1062 15.7644C16.4267 17.161 17.9653 18.5937 19.815 18.5937Z"
                stroke="#C1C1C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </RouterLink>
</template>