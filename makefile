#tag:=v1.0.1
tag:=v1.0.2
image_name:=poridhi-svc2
repository:=subrotosharma

build:
	@ docker build --platform linux/amd64 -t ${image_name}:${tag} .
	#@ docker buildx build -t ${image_name}:${tag} .

docker_push:
	@ echo "Pushing ${repository}/${image_name}:${tag} to docker hub "
	@ docker tag ${image_name}:${tag} ${repository}/${image_name}:${tag}
	@ docker push ${repository}/${image_name}:${tag}


run:
	@ docker run --name svc1 -d -p 8081:3000 ${image_name}:${tag}


rm:

	@ docker stop svc1
	@ docker rm svc1