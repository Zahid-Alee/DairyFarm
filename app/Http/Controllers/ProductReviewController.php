<?php

namespace App\Http\Controllers;

use App\Models\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductReviewController extends Controller
{


    public function index($product_id)
    {

        try {

            $reviews = ProductReview::where('product_id', $product_id)->get();
            if ($reviews) {

                return response()->json(['success' => true, 'data' => $reviews]);
            }
        } catch (\Exception $e) {

            return response()->json(['success' => false, 'message' => 'failed to get reviews', 'error' => $e->getMessage()], 500);
        }
    }


    public function store(Request $request)
    {
        try {

            $user = Auth::user();

            if ($user) {

                $review = new ProductReview();
                $review->product_id = $request->input('product_id');
                $review->review_text = $request->input('review_text');
                $review->user_name = $request->input('user_name');
                $review->user_email = $request->input('user_email');
                $review->country = $request->input('country');
                $review->rating = $request->input('rating');
                $review->review_date = $request->input('review_date');

                $review->save();

                return response()->json(['success' => true, 'message' => 'Category created successfully'], 200);
            } else {

                return response()->json(['success' => false, 'message' => 'Unauthorized User '], 201);
            }
            
        } catch (\Exception $e) {

            return response()->json(['success' => false, 'message' => 'Failed to create category', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $review_id)
    {
        try {

            $user = Auth::user();

            if ($user) {

                $review = ProductReview::findOrFail($review_id);

                if ($review) {

                    $review->product_id = $request->input('product_id');
                    $review->review_text = $request->input('review_text');
                    $review->user_name = $request->input('user_name');
                    $review->user_email = $request->input('user_email');
                    $review->country = $request->input('country');
                    $review->rating = $request->input('rating');
                    $review->review_date = $request->input('review_date');
                    $review->save();

                    return response()->json(['success' => true, 'message' => 'Review created successfully'], 200);
                }

                return response()->json(['success' => false, 'message' => 'Review not found'], 404);

            } else {

                return response()->json(['success' => false, 'message' => 'Unauthorized User '], 201);
            }

        } catch (\Exception $e) {

            return response()->json(['success' => false, 'message' => 'Failed to save review', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {

            $review = ProductReview::findOrFail($id);

            if ($review) {

                $review->delete();

                return response()->json(['message' => 'review deleted successfully.'], 200);
            }

            return response()->json(['error' => 'review not found'], 404);

        } catch (\Exception $e) {

            return response()->json(['error' => $e], 500);
        }
    }
}
