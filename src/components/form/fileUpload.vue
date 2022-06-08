<template>
    <div class="col-12 text-start p-0">


        <div class="file-loading">
<!--            <input id="input-b3" name="input-b3[]" type="file" class="file" multiple-->
<!--                   data-show-upload="false" data-show-caption="true" data-msg-placeholder="Select {files} for upload...">-->
                        <input id="input-id" name="files[]" multiple type="file" class="file" data-preview-file-type="text" >
        </div>

    </div>

</template>

<script>
    export default {
        name:"fileUploads",


        mounted() {
            $("#input-id").fileinput({
                browseLabel: 'Select Folder...',
                showPreview: true,
                showRemove: true,
                showUpload: false,
                dropZoneEnabled: true,

                layoutTemplates: {
                    actionUpload: '',
                },
                uploadUrl: '/countries',
                inputGroupClass: "input-group-lg",


                previewFileIcon: '<i class="fas fa-file"></i>',
                // allowedPreviewTypes: null, // set to empty, null or false to disable preview for all types
                previewFileIconSettings: {
                    'doc': '<i class="fas fa-file-word text-primary fa-2x"></i>',
                    'xls': '<i class="fas fa-file-excel text-success fa-2x"></i>',
                    'ppt': '<i class="fas fa-file-powerpoint text-danger fa-2x"></i>',
                    // 'jpg': '<i class="fas fa-file-image text-warning fa-2x"></i>',
                    'pdf': '<i class="fas fa-file-pdf text-danger fa-2x"></i>',
                    'zip': '<i class="fas fa-file-archive text-muted fa-2x"></i>',
                    'htm': '<i class="fas fa-file-code text-info fa-2x"></i>',
                    'txt': '<i class="fas fa-file-alt text-info fa-2x"></i>',
                    'mov': '<i class="fas fa-file-video text-warning fa-2x"></i>',
                    'mp3': '<i class="fas fa-file-audio text-warning fa-2x"></i>',
                },
                previewFileExtSettings: {
                    'doc': function(ext) {
                        return ext.match(/(doc|docx)$/i);
                    },
                    'xls': function(ext) {
                        return ext.match(/(xls|xlsx)$/i);
                    },
                    'ppt': function(ext) {
                        return ext.match(/(ppt|pptx)$/i);
                    },
                    // 'jpg': function(ext) {
                    //     return ext.match(/(jp?g|png|gif|bmp)$/i);
                    // },
                    'zip': function(ext) {
                        return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
                    },
                    'htm': function(ext) {
                        return ext.match(/(php|js|css|htm|html)$/i);
                    },
                    // 'txt': function(ext) {
                    //     return ext.match(/(txt|ini|md)$/i);
                    // },
                    'mov': function(ext) {
                        return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
                    },
                    'mp3': function(ext) {
                        return ext.match(/(mp3|wav)$/i);
                    },
                }
            });
        },
    }


</script>