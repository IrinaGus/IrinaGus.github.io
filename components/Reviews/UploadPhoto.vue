<script setup>
	const emit = defineEmits(['uploadedPhoto']);
	
  
	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = $PhotosGet();
	const maxId = photos.length > 0 ? Math.max(...photos.map(photo => photo.id)) : 0;

	const newPhoto = ref({
		id: null,
		src: '',
		alt: '',
	});

	const image = ref(null);
	const fileInput = ref(null); 
  

	//METHODS
	const triggerFileInput = () => {
		fileInput.value.click(); 
	};
  
	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image.value = e.target.result; 

				if (image.value) {
					newPhoto.value.src = image.value;
					newPhoto.value.id = maxId + 1;
					photos.push({ ...newPhoto.value })
					emit('uploadedPhoto', image.value, newPhoto.value.id);
				}	
			};
			reader.readAsDataURL(file);
		}
	};
</script>
  

<template>
	<div>
		<div @click="triggerFileInput" class="uploadArea">
			<div class="text">
				写真を追加
			</div>
		</div>
		<input type="file" ref="fileInput" @change="onFileChange" 
			style="display: none;" accept="image/*" />
	</div>
</template>


<style scoped>
  	.uploadArea {
		border-radius: 16px;
		width: 196px;
		height: 50px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.text {
		font-size: 20px;
		color: #007AFF;
		font-weight: 500;
	}
</style>
  