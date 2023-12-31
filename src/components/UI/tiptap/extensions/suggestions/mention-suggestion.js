import { mergeAttributes, Node } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'
import { PluginKey } from 'prosemirror-state'
import tippy from 'tippy.js'

import { MENTION_SUGGESTIONS } from '../../data'
import { MentionDropdown } from './MentionDropdown'

const MentionSuggestion = Node.create({
    name: 'mentionSuggestion',
    group: 'inline',
    inline: true,
    selectable: false,
    atom: true,
    addOptions() {
        return {
            suggestion: {
                char: '@',
                allowSpaces: true,
                pluginKey: new PluginKey('emojiSuggestion'),
                command: ({ editor, range, props }) => {
                    const nodeAfter = editor.view.state.selection.$to.nodeAfter
                    const overrideSpace = nodeAfter?.text?.startsWith(' ')

                    if (overrideSpace) {
                        range.to += 1
                    }

                    editor
                        .chain()
                        .focus()
                        .insertContentAt(range, [
                            {
                                type: 'mentionSuggestion',
                                attrs: props,
                            },
                            {
                                type: 'text',
                                text: ' ',
                            },
                        ])
                        .run()
                },
                allow: ({ editor, range }) => {
                    return editor.can().insertContentAt(range, { type: 'mentionSuggestion' })
                },
                items: ({ query }) => {
                    return MENTION_SUGGESTIONS.filter(({ name }) =>
                        name.toLowerCase().includes(query.toLowerCase()),
                    )
                },
                render: () => {
                    let reactRenderer
                    let popup

                    return {
                        onStart: (props) => {
                            reactRenderer = new ReactRenderer(MentionDropdown, {
                                props,
                                editor: props.editor,
                            })

                            popup = tippy('body', {
                                getReferenceClientRect: props.clientRect,
                                appendTo: () => document.body,
                                content: reactRenderer.element,
                                showOnCreate: true,
                                interactive: true,
                                trigger: 'manual',
                                placement: 'bottom-start',
                            })
                        },
                        onUpdate(props) {
                            reactRenderer.updateProps(props)

                            popup[0].setProps({
                                getReferenceClientRect: props.clientRect,
                            })
                        },
                        onKeyDown(props) {
                            if (props.event.key === 'Escape') {
                                popup[0].hide()
                                return true
                            }

                            return Boolean(reactRenderer.ref?.onKeyDown(props))
                        },
                        onExit() {
                            popup[0].destroy()
                            reactRenderer.destroy()
                        },
                    }
                },
            },
        }
    },
    addAttributes() {
        return {
            id: {
                default: null,
                renderHTML: (attributes) => ({
                    'data-user-id': attributes.id,
                }),
            },
            name: {
                default: null,
                parseHTML: (element) => element.getAttribute('aria-label')?.split(/\s(.+)/)[1],
                renderHTML: (attributes) => ({
                    'aria-label': `Name: ${attributes.name}`,
                }),
            },
        }
    },
    parseHTML() {
        return [{ tag: 'span[data-mention]' }]
    },
    renderHTML({ node, HTMLAttributes }) {
        return [
            'span',
            mergeAttributes({ 'data-mention': '' }, HTMLAttributes),
            ['span', { class: 'char' }, this.options.suggestion.char],
            ['span', { class: 'name' }, node.attrs.name],
        ]
    },
    renderText({ node }) {
        return `${this.options.suggestion.char}${node.attrs.name}`
    },
    /*addKeyboardShortcuts() {
        return {
            Backspace: () =>
                this.editor.commands.command(({ tr, state }) => {
                    let isMention = false
                    const { selection } = state
                    const { empty, anchor } = selection

                    if (!empty) {
                        return false
                    }

                    state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
                        if (node.type.name === this.name) {
                            isMention = true
                            tr.insertText(
                                this.options.suggestion.char || '',
                                pos,
                                pos + node.nodeSize,
                            )

                            return false
                        }
                    })

                    return isMention
                }),
        }
    },*/
    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ]
    },
})

export { MentionSuggestion }
