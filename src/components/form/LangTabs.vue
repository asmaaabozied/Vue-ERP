<template>
  <div
    class="tab-pane fade active show"
    id="page-general"
    role="tabpanel"
    aria-labelledby="page-g-tab"
  >
    <ul class="nav nav-tabs0" id="myTabs-general" role="tablist">
      <li class="nav-item" v-for="language in languages" :key="language.prefix">
        <a
          class="nav-link language-tab"
          :class="{ active: language.name == 'arabic' }"
          id="langu-tab"
          :data-toggle="`tab`"
          :href="`#${language.prefix}`"
          :role="`tab`"
          :aria-controls="`${language.prefix}`"
          aria-selected="false"
        >
          <span class="nav-text"> {{ $t(`${language.name}`) }}</span>
        </a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent-general">
      <div
        v-for="language in languages"
        :key="language.id"
        class="tab-pane fade"
        :class="{ 'show active': language.name == 'arabic' }"
        :id="`${language.prefix}`"
        :role="`tabpanel`"
        :aria-labelledby="`${language.prefix}-tab`"
      >
        <slot :language="language.prefix" name="input"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lang-tabs",
  data() {
    return {
      languages: window.$languages,
    };
  },
};
</script>
 
