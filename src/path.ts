
export const paths = {
    home() {
        return '/'
    },
    showFolder(folderId: string) {
        return `/home/folders/${folderId}`
    },
    showNote(noteId: string, folderId: string) {
        return `/home/folders/${folderId}/notes/${noteId}`
    },
    showTag(tagId: string) {
        return `/home/tags/${tagId}`
    },
    showNoteTag(tagId: string, noteId: string) {
        return `/home/tags/${tagId}/notes/${noteId}`
    }
}

// showFolder(folderId: string) {
//     return `/home?id=${folderId}`
// }

// showNote(noteId: string, folderId: string) {
//     return `/home?id=${folderId}&note=${noteId}`
// }
