import Swal from "sweetalert2";

export const confirmAlert = (title: string | undefined, subTitle: string, icon: any, requestFunction: () => void) => {
  return Swal.fire({
    title,
    text: subTitle,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#de2626",
    cancelButtonColor: "#022796",
    confirmButtonText: "삭제",
    cancelButtonText: "취소",
  }).then((result) => {
    if (result.value) {
      requestFunction();
    }
  });
};
