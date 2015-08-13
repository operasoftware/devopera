module Jekyll
	module KeepUnique
		def keep_unique(input)
			input.uniq
		end
	end
end

Liquid::Template.register_filter(Jekyll::KeepUnique)
