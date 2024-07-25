// src/Editor.js
import React, { useMemo } from 'react';
import YooptaEditor, { createYooptaEditor } from '@yoopta/editor';
import ParagraphPlugin from '@yoopta/paragraph';
import BlockquotePlugin from '@yoopta/blockquote';
import AccordionPlugin from '@yoopta/accordion';
import CodePlugin from '@yoopta/code';
import EmbedPlugin from '@yoopta/embed';
import ImagePlugin from '@yoopta/image';
import LinkPlugin from '@yoopta/link';
import FilePlugin from '@yoopta/file';
import CalloutPlugin from '@yoopta/callout';
import VideoPlugin from '@yoopta/video';
import { BulletedList, NumberedList, TodoList } from '@yoopta/lists';
import { HeadingOne, HeadingTwo, HeadingThree } from '@yoopta/headings';

import ActionMenuList from '@yoopta/action-menu-list';
import Toolbar from '@yoopta/toolbar';
import LinkTool from '@yoopta/link-tool';

import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';

const plugins = [
    ParagraphPlugin,
    BlockquotePlugin,
    AccordionPlugin,
    CodePlugin,
    EmbedPlugin,
    ImagePlugin,
    LinkPlugin,
    FilePlugin,
    CalloutPlugin,
    VideoPlugin,
    BulletedList,
    NumberedList,
    TodoList,
    HeadingOne,
    HeadingTwo,
    HeadingThree
];

const tools = [
    ActionMenuList,
    Toolbar,
    LinkTool
];

const marks = [
    Bold,
    Italic,
    CodeMark,
    Underline,
    Strike,
    Highlight
];

export default function Editor() {
    const editor = useMemo(() => createYooptaEditor(), []);

    return (
        <div>
            <YooptaEditor
                editor={editor}
                plugins={plugins}
                tools={tools}
                marks={marks}
            />
        </div>
    );
}