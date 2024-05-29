import { useReducer } from "react"

import Title from "./styled/Title"
import reviewReducer from "./reducers/reviewReducer"


const initialReviews = [
    {
        id: 1,
        description: "bad to use do not recommend",
    },
    {
        id: 2,
        description: "more fun than tai-chi at a lepper colony"
    }
]

function Review() {

    // const [reviews, setReviews] = useState(initialReviews)
    // const [review, setReview] = useState("")
    // const [showEditBox, setShowEditBox] = useState(false)
    // const [editReviewId, setEditReviewId] = useState(null)
    // const [editReviewDesc, setEditReviewDesc] =useState("")

    const initialState = {
        reviews: initialReviews,
        review: "",
        showEditBox: false,
        editReviewId: null,
        editReviewDesc: ""
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState)

    const { reviews, review, showEditBox, editReviewDesc } = store

    const handleOnChange = (e) => {
        dispatch({
            type: 'setReview',
            data: e.target.value
        })
        // setReview(e.target.value)
    }

    const addReview = (e) => {
        e.preventDefault()
        dispatch({
            type: 'addReview',
        })
        // setReviews((prevReviews) => {
        //     return [
        //         ...prevReviews,
        //         {id: prevReviews.length + 1,
        //         description: review
        //         }
        //     ]}
        // )
        // setReview("")
    }

    const deleteReview = (id) => {
        dispatch({
            type: 'deleteReview',
            data: id
        })
        //  const newReviews = reviews.filter((review) => 
        //     review.id !== id)

        //  setReviews(newReviews)
    }

    const editReview = (id) => {
        dispatch({
            type: "editReview",
            data: id
        })
        // setShowEditBox(true)
        // setEditReviewId(id)
        // setEditReviewDesc(reviews.find((review => review.id === id)).description)
        }


    const handleEditReview = (e) => {
        dispatch({
            type: 'setEditReview',
            data: e.target.value
        })
        
        // e.preventDefault()
        // setEditReviewDesc(e.target.value)
    }

    const handleEdit = () => {
        dispatch({
            type: 'handleEdit',
        })
        // let newReviews = [...reviews]
        // const reviewIndexToEdit = reviews.findIndex(
        //     (review) => review.id === editReviewId
        // )
        // newReviews[reviewIndexToEdit].description = editReviewDesc
        // setReviews(newReviews)
        // setEditReviewDesc("")
        // setShowEditBox(false)
    }

    return (
        <div style={{ padding: 20}}>
            <Title>Review</Title>
            {reviews.map((review) => {
                return (
                    <div key={review.id} style={{ padding: '20px 0px'}}>
                        <div>{review.description}</div>
                        <button onClick={() => editReview(review.id)}>Edit</button>
                        <button onClick={() => deleteReview(review.id)}>Delete</button>
                    </div>
                )
            }
            )}
            {showEditBox && (
                <div>
                    <textarea value={editReviewDesc} onChange={handleEditReview} />
                    <div>
                        <button onClick={handleEdit}>Save Edit</button>
                    </div>
                </div>
            )}
            <form>
                <div>Add Review</div>
                <textarea value={review} onChange={handleOnChange} />
                <button onClick={addReview}>Add</button>
            </form>
        </div>
    )
}

export default Review