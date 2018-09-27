<template>
    <div id="app">
        <tui-viewer
        ref="tuiEditorViewer"
        :value="viewerText"
        height="500px"
        />
        <tui-editor
        ref="tuiEditor"
        v-model="editorText"
        :options="editorOptions"
        :height="editorHeight"
        :html="editorHtml"
        :mode="editorMode"
        :visible="editorVisible"
        :previewStyle="editorPreviewStyle"
        @load="onEditorLoad"
        @focus="onEditorFocus"
        @blur="onEditorBlur"
        @change="onEditorChange"
        @stateChange="onEditorStateChange"
        />
        <div>
            <h3>Props Test Buttons</h3>
            <button @click="changeText">changeText</button>
            <button @click="changeHeight">changeHeight</button>
            <button @click="changeHtml">changeHtml</button>
            <button @click="changeMode">changeMode</button>
            <button @click="changeVisible">changeVisible</button>
            <button @click="changePreviewStyle">changePreviewStyle</button>
        </div>
        <div>
            <h3>Function Test Buttons</h3>
            <button v-for="method in methodNames" :key="method" @click="methodInvoke(method)">
                {{ method }}
            </button>
            <button @click="scrollTop">scrollTop</button>
            <p>Function Result : {{ message }}</p>
        </div>
        <div>
            <p>Event Result : </p>
            <p v-html=events>
            </p>
        </div>
    </div>
</template>

<script>
import { Editor, EditorViewer } from '@toast-ui/vue-editor'

const eventListenr = [
    'onEditorLoad',
    'onEditorFocus',
    'onEditorBlur',
    'onEditorChange',
    'onEditorStateChange'
].reduce(function(methods, methodName) {
    methods[methodName] = function() {
        this.events += methodName + '<br/>';
    };

    return methods;
}, {});

export default {
    name: 'App',
    components: {
        'tui-editor': Editor,
        'tui-viewer': EditorViewer
    },
    data() {
        return {
            message: '',
            events: '',
            methodNames: [
                'focus',
                'getValue',
                'getHtml',
                'getSelectedText',
                'moveCursorToStart',
                'moveCursorToEnd',
                'reset'
            ],
            viewerText: '# This is Viewer.\n Hello World.',
            editorText: 'This is initialValue.',
            editorOptions: {
                hideModeSwitch: false,
                toolbarItems: [
                    'heading',
                    'bold',
                    'italic',
                    'strike',
                    'divider',
                    'hr',
                    'quote',
                    'divider',
                    'ul',
                    'ol',
                    'task',
                    'indent',
                    'outdent',
                    'divider',
                    'table',
                    'image',
                    'link',
                    'divider',
                    'code',
                    'codeblock'
                ]
            },
            editorHeight: '200px',
            editorHtml: '',
            editorMode: 'markdown',
            editorVisible: true,
            editorPreviewStyle: 'vertical'
        };
    },
    methods: Object.assign(eventListenr, {
        methodInvoke(methodName) {
            this.message = this.$refs.tuiEditor.invoke(methodName);
        },
        scrollTop: function() {
            this.$refs.tuiEditor.invoke('scrollTop', 10);
        },
        changeText() {
            this.editorText += 'hihi';
        },
        changeHeight() {
            let height = parseInt(this.editorHeight.split('px')[0], 10);
            this.editorHeight = (height + 50) + 'px';
        },
        changeHtml: function() {
            this.editorHtml = '<h1>Hi</h1>';
        },
        changeMode() {
            this.editorMode = this.editorMode === 'wysiwyg' ? 'markdown' : 'wysiwyg';
        },
        changeVisible: function() {
            this.editorVisible = !this.editorVisible;
        },
        changePreviewStyle: function() {
            this.editorPreviewStyle = this.editorPreviewStyle === 'tab' ? 'vertical' : 'tab';
        }
    })
};
</script>
