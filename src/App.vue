<script setup lang="ts">
import { nextTick, ref } from 'vue'
import request from './test-request'

const files = ref(new Array<File>())
const showInput = ref(true)

async function addFile(e: InputEvent) {
  showInput.value = false
  await nextTick()
  let el = e.target as HTMLInputElement
  if (el.files) {
    for (let i = 0; i < el.files.length; i++) {
      files.value.push(el.files[i])
    }
  }
  showInput.value = true
}

async function upload() {
  showInput.value = false
  await nextTick()
  const formData = new FormData()

  formData.append('operations', JSON.stringify({
    'operationName': 'SaveTask',
    'variables': {
      'taskId': '65b35d6a149465541523cede',
      'input': [{
        'UPLOAD_FILES': {
          'path': 'documents',
          'files': files.value.map(() => null),
          'fileChanges': files.value.map(() => [])
        }
      }],
      'keepLock': true,
      'heldVersion': 0
    },
    'query': `
      mutation SaveTask($taskId: String!, $input: [TaskChange!]!, $keepLock: Boolean!, $heldVersion: Int!) {
        saveTask(
          taskId: $taskId
          input: $input
          keepLock: $keepLock
          heldVersion: $heldVersion
        ) {
          success
          lockExpired
          holderName
          __typename
        }
      }
    `
  }))

  let fileMap: Record<string, string[]> = {}
  for (let i = 0; i < files.value.length; i++) {
    fileMap[`${i + 1}`] = [`variables.input.0.UPLOAD_FILES.files.${i}`]
  }
  formData.append('map', JSON.stringify(fileMap))

  for (let i = 0; i < files.value.length; i++) {
    formData.append(`${i + 1}`, files.value[i])
  }
  const response = await request(formData)

  if (response.ok) {
    files.value = new Array<File>()
  }
  showInput.value = true
}
</script>
<template>
  <header>
    <h1>Playwright Upload Error demo</h1>
    <hr>
  </header>
  <main>
    <p>Selected files: <span data-test="fileCount">{{ files.length }}</span></p>
    <ul v-if="files.length">
      <li v-for="(file, i) in files" :key="`file-${i}`">{{ file.name }}</li>
    </ul>
    <div v-if="showInput">
      <label>
        <span
          data-test="upload"
          style="margin-left: 2em; border: 1px solid #000; background: #eee; padding: 3px 5px; cursor: pointer;"
        >Select File</span>
        <input type="file" multiple @input="addFile($event as InputEvent)" style="display: none;">
      </label>
      <div v-if="files.length">
        <hr>
        <button type="submit" @click="upload" data-test="submit">Upload</button>
      </div>
    </div>
    <progress v-else />
  </main>
</template>
