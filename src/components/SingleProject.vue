<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetailsVisible">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'edit-project', params: { id: project.id } }">
          <span @click="editProject" class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons delete">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  components: {},
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    toggleDetailsVisible() {
      this.showDetails = !this.showDetails;
    },
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err.message));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.material-icons.delete:hover {
  color: #e90074;
}

.material-icons.tick:hover {
  color: #00d35f;
}

.project.complete {
  border-left: 4px solid #00d35f;
}

.project.complete .tick {
  color: #00d35f;
}
</style>
