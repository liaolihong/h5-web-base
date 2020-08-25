# Citybrain nginx Dockerfile
# Version 1.0
# Base images 基础镜像
FROM nginx:1.16.0-alpine
#LABEL 维护者信息
LABEL caosx caosx@watone.com.
# Citybrain nginx Dockerfile
# Version 1.0
# Base images 基础镜像
FROM nginx:1.16.0-alpine
#LABEL 维护者信息
LABEL caosx caosx@watone.com.
#EXPOSE 映射端口
EXPOSE 7777
#CMD 运行以下命令
CMD ["nginx", "-g", "daemon off;"]
#COPY
COPY ./dist/ /usr/share/nginx/html/
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/conf.d/default.conf /etc/nginx/conf.d/default.conf
#RUN 赋予权限
RUN chown -R nginx. /usr/share/nginx
#EXPOSE 映射端口
EXPOSE 7777
#CMD 运行以下命令
CMD ["nginx", "-g", "daemon off;"]