#include <iostream>

using namespace std;

int boj_1712() {

	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	long fixed_cost;
	long variable_cost;
	long product_cost;

	bool bepoint = true;
	long count = -1;

	cin >> fixed_cost;
	cin >> variable_cost;
	cin >> product_cost;

	if (product_cost <= variable_cost) bepoint = false;
	else {
		count = fixed_cost / (product_cost - variable_cost) + 1;
	}
	
	cout << count << "\n";

	return 0;
}