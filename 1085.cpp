#include <iostream>

using namespace std;

int boj_1085() {

		int x, y, w, h; cin >> x >> y >> w >> h;
		
		int k = 0;

		w -= x; h -= y;

		x = x >= w ? w : x;
		y = y >= h ? h : y;
		k = x >= y ? y : x;

		cout << k << "\n";
		
	return 0;
}