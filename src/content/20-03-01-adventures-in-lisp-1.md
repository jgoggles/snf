---
path: "/blog/adventures-in-lisp-1"
date: "2020-03-01"
title: "Adventures In Lisp 1"
---

Speed: the final frontier. Everyone wants speed in as many ways as possible. Americans love fast cars. Put the top down or absent a convertible
your hand out the window and pretend its a Tom-Cruise-piloted supersonic war machine. Give the Russians the bird. 
Give us the food fast. Put that burger in your mouth and down your gullet. Make sure you don't waste time even breathing. You want to get rich? The most reliable way
to do it is quickly. Hey what's up with your slow terrible Internet? Only Prime Shipping otherwise I'm moving on. I spit on your 4G because only the fastest everything please and thank you.

```lisp{numberLines: true}
(defvar *db* nil)
(defvar *db-file* "./cds.db")

(defun add-record (cd) (push cd *db*))
(defun remove-record () (pop *db*))

(defun make-cd (title artist rating ripped)
  (list :title title :artist artist :rating rating :ripped ripped))

(defun dump-db ()
  (format t "~{~{~a:~10t~a~%~}~%~}" *db*))

(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun prompt-for-cd ()
  (make-cd
   (prompt-read "Title")
   (prompt-read "Artist")
   (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
   (y-or-n-p "Ripped:")))

(defun add-cds ()
  (loop (add-record (prompt-for-cd))
      (if (not (y-or-n-p "Another? ")) (return))))  

(defun save-db (&key (filename *db-file*))
  (with-open-file (out filename
                   :direction :output
                   :if-exists :supersede)
    (with-standard-io-syntax
      (print *db* out))))

(defun load-db (&key (filename *db-file*))
  (with-open-file (in filename)
    (with-standard-io-syntax
      (setf *db* (read in)))))

;; this is the one I wrote all by myself :) and I think
;; it's pretty noice
;; (defun select (key query)
;;   (remove-if-not #'(lambda (cd) (equal (getf cd key) query))
;;   *db*))

(defun select (selector-fn)
  (remove-if-not selector-fn *db*))

;; for WHERE macro
(defun make-comparison-expr (field value)
  `(equal (getf cd ,field) ,value))

;; for WHERE macro
(defun make-comparisons-list (fields)
  (loop while fields
     collecting (make-comparison-expr (pop fields) (pop fields))))

(defmacro where (&rest clauses)
  `#'(lambda (cd) (and ,@(make-comparisons-list clauses))))

;; old implementation
;; (defun where (&key title artist rating (ripped nil ripped-p))
;;   #'(lambda (cd)
;;       (and
;;        (if title    (equal (getf cd :title)  title)  t)
;;        (if artist   (equal (getf cd :artist) artist) t)
;;        (if rating   (equal (getf cd :rating) rating) t)
;;        (if ripped-p (equal (getf cd :ripped) ripped) t))))

(defun update (selector-fn &key title artist rating (ripped nil ripped-p))
  (setf *db*
        (mapcar
         #'(lambda (row)
             (when (funcall selector-fn row)
               (if title    (setf (getf row :title) title))
               (if artist   (setf (getf row :artist) artist))
               (if rating   (setf (getf row :rating) rating))
               (if ripped-p (setf (getf row :ripped) ripped)))
             row) *db*)))

(defun delete-rows (selector-fn)
  (setf *db* (remove-if selector-fn *db*)))

```

Whoa how **weird** _this_ is
```ruby
def wha
  puts "hi"
end
```

```javascript
const hey = () => {
  let yo = 3;
  if (foo) {
    console.log("ok")
  }
}
