function reviewReducer(state, action) {
    switch(action.type) {
        case 'setReview':
            return {
                ...state,
                review: action.data
            }
        case 'addReview': {
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    {id: state.reviews.length + 1, description: state.review
                    }      
                ],
                review: ""
            }
        }
        case 'deleteReview': {
            const newReviews = state.reviews.filter((review) => 
                review.id !== action.data)
            return {
                ...state,
                reviews: newReviews
            }
        }
        case 'editReview': {
            return {
                ...state,
                showEditBox: true,
                editReviewId: action.data,
                editReviewDesc: state.reviews.find((review) => review.id === action.data).description
            }

        }
        case 'setEditReview': {
            return {
                ...state,
                editReviewDesc: action.data
            }
        }
        case 'handleEdit': {
            let newReviews = [...state.reviews]
            const reviewIndexToEdit = state.reviews.findIndex(
                (review) => review.id === state.editReviewId
            )
            console.log(newReviews)
            newReviews[reviewIndexToEdit].description = state.editReviewDesc
        return {
            ...state,
            reviews: newReviews,
            editReviewDesc: "",
            showEditBox: false
        }
    }
        default:
            return state
    }
}

        // setReviews((prevReviews) => {
        //     return [
        //         ...prevReviews,
        //         {id: prevReviews.length + 1,
        //         description: review
        //         }
        //     ]}
        // )
        // setReview("")

export default reviewReducer