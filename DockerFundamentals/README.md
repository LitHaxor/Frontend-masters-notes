# Docker Fundamentals


## Pulling images

To start docker you need to pull the docker image from [Docker/Installation Per distro](https://docs.docker.com/engine/install/centos/)


## Containers

### Running docker

Open up your terminal/powershell and run this command 
```
    docker run -it --name docker-host --rm --privileged ubuntu:focal
```

### Chroot 

I've heard people call this "cha-root" and "change root". I'm going to stick to "change root" because I feel less ridiculous saying that. It's a Linux command that allows you to set the root directory of a new process. In our container use case, we just set the root directory to be where-ever the new container's new root directory should be. And now the new container group of processes can't see anything outside of it, eliminating our security problem because the new process has no visibility outside of its new root.

1. create new root dir
```
mkdir new_root
```
2. create new bin dir inside the new_root, new_root/bin/
```
mkdir new_root/bin/
```
3. Copy bin/bash from root to the *new_root*/bash
```
cp bin/bash new_root/bin/
```
4. Create dependency files (libs) for bash.

```
// see dependency 
ldd bin/bash

// make lib directory inside new_root

mkdir new_root/lib{,64} || ls new_root
```

4. copy lib and other dependecies
```
    ldd bash/ls
    copy all to new_root/lib and lib64 respectively
```


# Docker


## Building custom Docker img without docker

* start docker contanier with docker running in it connected to host docker daemon
```
docker run -ti -v /var/run/docker.sock:/var/run/docker.sock --privileged --rm --name docker-host docker:18.06.1-ce
```
* run stock alpine container
```
docker run --rm -dit --name my-alpine alpine:3.10 sh
```
* export running container's file system
```
docker export -o dockercontainer.tar my-alpine
```
* make container-root directory, export contents of container into it
```
mkdir container-root
tar xf dockercontainer.tar -C container-root/
```

* make a contained user, mount in name spaces
```
unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot $PWD/container-root sh 
mount -t proc none /proc
mount -t sysfs none /sys
mount -t tmpfs none /tmp
```

## Docker Img with docker

```
docker run --interactive --tty alpine:3.10 
# or, to be shorter: 
docker run -it alpine:3.10
```


## NodeJS on docker



# The docker file

## Raw docker file
create a file named Dockerfile
```
FROM node

CMD ["node", "-e", "console.log(\"Hello world\")"]
```

To build and run 
*$docker build -t node-app .*

*$docker run --init --rm node-app .*

