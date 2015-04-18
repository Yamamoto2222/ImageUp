// 画像アップロード関数
/* 
 * 関数名:imageUp
 * 概要  :画像をアップロードした時にサムネイルを表示する
 * 引数  :なし
 * 返却値 :なし
 * 作成者:T.Yamamoto
 * 作成日:2015.04.18
 */
function imageUp () {
	// jqueryの始まり
	$(function() {
		// アップロードするファイルを選択
		$('.imageFile').change(function() {
			// 属性名を取得する
			var file = $(this).prop('files')[0];

			// 選択されたものが画像だった時にサムネを表示する
			if (file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/gif') {
				// 画像表示するオブジェクトを作る
				var reader = new FileReader();
				// ファイルを読み込んだとき画像のsrc属性を入力する
				reader.onload = function() {
					// 画像を表示する
					var img_src = $('.imageArea').attr('src', reader.result);
				}
				// fileのURLを読み込む
				reader.readAsDataURL(file);

			// 選択されたのが画像でなかった時の処理
			} else {
				// 画像表示エリアに注釈を表示する
				$('.outputarea').html('選択したものは画像ではありません<br>ページを再読み込みして画像を選択してください');
				// 関数の処理を終了する
				return;
			}
		});		// ファイルのアップロードの設定終わり
	});		// jqueryの記述終わり
}
